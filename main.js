import { exercises } from './exercises.js';

document.addEventListener('DOMContentLoaded', async () => {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');
    const exerciseTitle = document.getElementById('exercise-title');
    const exerciseDescription = document.getElementById('exercise-description');
    const exerciseExample = document.getElementById('exercise-example');
    const outputEl = document.getElementById('output');
    const runBtn = document.getElementById('run-btn');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const showSolutionBtn = document.getElementById('show-solution-btn');

    let pyodide;
    let currentExerciseIndex = 0;
    let editor;

    async function initPyodide() {
        pyodide = await loadPyodide();
        loader.style.display = 'none';
        mainContent.classList.remove('hidden');
    }

    function initCodeMirror() {
        editor = CodeMirror.fromTextArea(document.getElementById('code-editor'), {
            mode: 'python',
            theme: 'material-darker',
            lineNumbers: true,
            indentUnit: 4,
        });
    }

    function renderExercise(index) {
        const exercise = exercises[index];
        exerciseTitle.textContent = exercise.title;
        exerciseDescription.textContent = exercise.description;
        exerciseExample.textContent = exercise.example;
        editor.setValue(exercise.templateCode);
        outputEl.innerHTML = 'Haz clic en "Ejecutar Código" para probar tu solución.';
        outputEl.className = '';

        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === exercises.length - 1;
    }

    async function runCode() {
        outputEl.textContent = 'Ejecutando...';
        outputEl.className = '';
        const userCode = editor.getValue();
        const exercise = exercises[currentExerciseIndex];
        let allTestsPassed = true;
        let finalMessage = '';

        for (const testCase of exercise.testCases) {
            const fullCode = `${userCode}\n\n${testCase.checkCode}`;
            try {
                // Redirect python stdout to capture print() statements
                await pyodide.runPythonAsync(`
import sys
import io
sys.stdout = io.StringIO()
                `);
                
                await pyodide.runPythonAsync(fullCode);
                
                const result = await pyodide.runPythonAsync('sys.stdout.getvalue()');

                if (!result) {
                    allTestsPassed = false;
                    finalMessage = `
<span class="incorrect">¡Error en el código!</span>
<p>Tu código no ha producido ninguna salida verificable.</p>`;
                    await pyodide.runPythonAsync("sys.stdout = sys.__stdout__");
                    break;
                }
                
                const { success, userOutput, expectedOutput, error } = JSON.parse(result);

                if (error) {
                     allTestsPassed = false;
                    finalMessage = `
<span class="incorrect">¡Error en el código!</span>
<p>Tu código ha producido un error:</p>
<pre>${error}</pre>`;
                    break;
                }

                if (!success) {
                    allTestsPassed = false;
                    finalMessage = `
<span class="incorrect">¡Incorrecto!</span>
Prueba fallida para la entrada: ${JSON.stringify(testCase.input)}
<b>Tu resultado:</b>
<pre>${userOutput}</pre>
<b>Resultado esperado:</b>
<pre>${expectedOutput}</pre>`;
                    break;
                }
            } catch (error) {
                allTestsPassed = false;
                finalMessage = `
<span class="incorrect">¡Error en el código!</span>
<p>Tu código ha producido un error:</p>
<pre>${error.message}</pre>`;
                break;
            } finally {
                 // Restore stdout
                await pyodide.runPythonAsync("sys.stdout = sys.__stdout__");
            }
        }

        if (allTestsPassed) {
            finalMessage = '<span class="correct">¡Felicidades! Todos los tests han pasado correctamente. 🎉</span>';
        }
        
        outputEl.innerHTML = finalMessage;
    }

    function showSolution() {
        const exercise = exercises[currentExerciseIndex];
        editor.setValue(exercise.solution);
    }

    nextBtn.addEventListener('click', () => {
        if (currentExerciseIndex < exercises.length - 1) {
            currentExerciseIndex++;
            renderExercise(currentExerciseIndex);
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentExerciseIndex > 0) {
            currentExerciseIndex--;
            renderExercise(currentExerciseIndex);
        }
    });

    runBtn.addEventListener('click', runCode);
    showSolutionBtn.addEventListener('click', showSolution);

    await initPyodide();
    initCodeMirror();
    renderExercise(currentExerciseIndex);
});