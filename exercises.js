export const exercises = [
    {
        id: 1,
        title: "Múltiplos de 7 o que contienen 7",
        description: "Para números del 1 al n, crea una cadena. La cadena debe contener 'Lucky' si el número es múltiplo de 7 o contiene el dígito 7. De lo contrario, debe contener el número. Cada valor debe estar en una nueva línea.",
        example: `lucky_sevens(10) ->
"1
2
3
4
5
6
Lucky
8
9
10"`,
        templateCode: `def lucky_sevens(n):
    # Tu código aquí
    # Devuelve una cadena, no imprimas en consola.
    pass
`,
        testCases: [
            {
                input: 10,
                checkCode: `
import json
solution_output = []
for i in range(1, 10 + 1):
    if i % 7 == 0 or '7' in str(i):
        solution_output.append("Lucky")
    else:
        solution_output.append(str(i))
expected = "\\n".join(solution_output)
user_result = lucky_sevens(10)
print(json.dumps({
    "success": user_result == expected,
    "userOutput": str(user_result),
    "expectedOutput": expected
}))
`
            },
            {
                input: 20,
                checkCode: `
import json
solution_output = []
for i in range(1, 20 + 1):
    if i % 7 == 0 or '7' in str(i):
        solution_output.append("Lucky")
    else:
        solution_output.append(str(i))
expected = "\\n".join(solution_output)
user_result = lucky_sevens(20)
print(json.dumps({
    "success": user_result == expected,
    "userOutput": str(user_result),
    "expectedOutput": expected
}))
`
            }
        ]
    },
    {
        id: 2,
        title: "Suma de pares, producto de impares",
        description: "Calcula un acumulado partiendo de 1. Para un número n, itera desde 1 hasta n (inclusive). Si el número actual es par, súmalo al total. Si es impar, multiplícalo por el total. Empieza con un total inicial de 1.",
        example: `sum_product(5) -> 3 * 2 * 1 * 4 * 3 * 5 = 1 * 1 * 2 * 3 * 4 * 5 = 120 (incorrect example, let's fix logic)
Correct logic: total=1. i=1(odd): total=1*1=1. i=2(even): total=1+2=3. i=3(odd): total=3*3=9. i=4(even): total=9+4=13. i=5(odd): total=13*5=65. -> 65`,
        templateCode: `def sum_product(n):
    # Tu código aquí
    total = 1 # El total inicial debe ser 1
    # ...
    return total
`,
        testCases: [
            {
                input: 5,
                checkCode: `
import json
total = 1
for i in range(1, 5 + 1):
    if i % 2 == 0: total += i
    else: total *= i
expected = total
user_result = sum_product(5)
print(json.dumps({
    "success": user_result == expected,
    "userOutput": str(user_result),
    "expectedOutput": expected
}))
`
            }
        ]
    },
    {
        id: 3,
        title: "Contador de vocales",
        description: "Cuenta cuántas vocales (a, e, i, o, u) tiene un texto, ignorando si son mayúsculas o minúsculas.",
        example: `count_vowels("Hola Mundo") -> 4`,
        templateCode: `def count_vowels(s):
    # Tu código aquí
    pass
`,
        testCases: [
            {
                input: "Hola Mundo",
                checkCode: `
import json
expected = 4
user_result = count_vowels("Hola Mundo")
print(json.dumps({ "success": user_result == expected, "userOutput": str(user_result), "expectedOutput": expected }))
`
            },
            {
                input: "Python Es Genial",
                checkCode: `
import json
expected = 5
user_result = count_vowels("Python Es Genial")
print(json.dumps({ "success": user_result == expected, "userOutput": str(user_result), "expectedOutput": expected }))
`
            }
        ]
    },
    {
        id: 4,
        title: "Inversor de palabras",
        description: "Invierte el orden de las palabras en una frase.",
        example: `"Python es genial" -> "genial es Python"`,
        templateCode: `def reverse_words(sentence):
    # Tu código aquí
    pass
`,
        testCases: [
            {
                input: "Python es genial",
                checkCode: `
import json
expected = "genial es Python"
user_result = reverse_words("Python es genial")
print(json.dumps({ "success": user_result == expected, "userOutput": str(user_result), "expectedOutput": expected }))
`
            }
        ]
    },
    {
        id: 5,
        title: "Validador de contraseña simple",
        description: "Verifica si una contraseña es válida. Debe tener al menos 8 caracteres y al menos un número.",
        example: `valid_password("pass1234") -> True
valid_password("password") -> False`,
        templateCode: `def valid_password(pwd):
    # Tu código aquí
    pass
`,
        testCases: [
            {
                input: "pass1234",
                checkCode: `
import json
expected = True
user_result = valid_password("pass1234")
print(json.dumps({ "success": user_result == expected, "userOutput": str(user_result), "expectedOutput": expected }))
`
            },
            {
                input: "password",
                checkCode: `
import json
expected = False
user_result = valid_password("password")
print(json.dumps({ "success": user_result == expected, "userOutput": str(user_result), "expectedOutput": expected }))
`
            },
            {
                input: "p4ss",
                checkCode: `
import json
expected = False
user_result = valid_password("p4ss")
print(json.dumps({ "success": user_result == expected, "userOutput": str(user_result), "expectedOutput": expected }))
`
            }
        ]
    },
    {
        id: 6,
        title: "Generador de secuencia triangular",
        description: "Genera una lista con los primeros n números triangulares. La fórmula es n * (n + 1) / 2.",
        example: `triangular_numbers(5) -> [1, 3, 6, 10, 15]`,
        templateCode: `def triangular_numbers(n):
    # Tu código aquí
    # Devuelve una lista de números
    pass
`,
        testCases: [
            {
                input: 5,
                checkCode: `
import json
expected = [i*(i+1)//2 for i in range(1, 5 + 1)]
user_result = triangular_numbers(5)
print(json.dumps({ "success": user_result == expected, "userOutput": str(user_result), "expectedOutput": expected }))
`
            }
        ]
    },
    {
        id: 7,
        title: "Calculadora de factorial",
        description: "Calcula el factorial de un número n (n!). El factorial de 0 es 1.",
        example: `factorial(5) -> 120`,
        templateCode: `def factorial(n):
    # Tu código aquí
    pass
`,
        testCases: [
            {
                input: 5,
                checkCode: `
import json
import math
expected = math.factorial(5)
user_result = factorial(5)
print(json.dumps({ "success": user_result == expected, "userOutput": str(user_result), "expectedOutput": expected }))
`
            },
            {
                input: 0,
                checkCode: `
import json
import math
expected = math.factorial(0)
user_result = factorial(0)
print(json.dumps({ "success": user_result == expected, "userOutput": str(user_result), "expectedOutput": expected }))
`
            }
        ]
    },
    {
        id: 8,
        title: "Encuentra el máximo",
        description: "Encuentra el número más grande en una lista sin usar la función `max()` incorporada.",
        example: `find_max([1, 5, 2, 9, 3]) -> 9`,
        templateCode: `def find_max(numbers):
    # Tu código aquí
    pass
`,
        testCases: [
            {
                input: [1, 5, 2, 9, 3],
                checkCode: `
import json
expected = 9
user_result = find_max([1, 5, 2, 9, 3])
print(json.dumps({ "success": user_result == expected, "userOutput": str(user_result), "expectedOutput": expected }))
`
            }
        ]
    },
    {
        id: 9,
        title: "Suma de dígitos",
        description: "Suma todos los dígitos de un número entero positivo.",
        example: `digit_sum(123) -> 6`,
        templateCode: `def digit_sum(n):
    # Tu código aquí
    pass
`,
        testCases: [
            {
                input: 123,
                checkCode: `
import json
expected = 6
user_result = digit_sum(123)
print(json.dumps({ "success": user_result == expected, "userOutput": str(user_result), "expectedOutput": expected }))
`
            },
            {
                input: 987,
                checkCode: `
import json
expected = 24
user_result = digit_sum(987)
print(json.dumps({ "success": user_result == expected, "userOutput": str(user_result), "expectedOutput": expected }))
`
            }
        ]
    },
    {
        id: 10,
        title: "Generador de patrones",
        description: "Crea una cadena que represente un patrón de asteriscos. Para un n dado, la cadena debe mostrar líneas de 1 a n asteriscos, y luego de n-1 a 1 asteriscos. Cada grupo de asteriscos debe estar en una nueva línea.",
        example: `print_pattern(3) ->
"*
**
***
**
*"`,
        templateCode: `def print_pattern(n):
    # Tu código aquí
    # Devuelve una cadena, no imprimas en consola.
    pass
`,
        testCases: [
            {
                input: 3,
                checkCode: `
import json
lines = []
for i in range(1, 3 + 1): lines.append('*' * i)
for i in range(3 - 1, 0, -1): lines.append('*' * i)
expected = "\\n".join(lines)
user_result = print_pattern(3)
print(json.dumps({ "success": user_result == expected, "userOutput": str(user_result), "expectedOutput": expected }))
`
            }
        ]
    }
];

