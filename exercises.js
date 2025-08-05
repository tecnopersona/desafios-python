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
    # ¡Importante! Tu función debe DEVOLVER una cadena.
    # No imprimas el resultado en la consola.
    pass
`,
        solution: `def lucky_sevens(n):
    result = []
    for i in range(1, n + 1):
        if i % 7 == 0 or '7' in str(i):
            result.append("Lucky")
        else:
            result.append(str(i))
    return "\\n".join(result)
`,
        testCases: [
            {
                input: 10,
                checkCode: `
import json
import sys
import io

# Define la salida esperada
solution_output = []
for i in range(1, 10 + 1):
    if i % 7 == 0 or '7' in str(i):
        solution_output.append("Lucky")
    else:
        solution_output.append(str(i))
expected = "\\n".join(solution_output)

# Ejecuta el código del usuario y captura el resultado
try:
    user_result = lucky_sevens(10)
    success = user_result == expected
    error_message = None
except Exception as e:
    user_result = str(e)
    success = False
    error_message = str(e)

print(json.dumps({
    "success": success,
    "userOutput": str(user_result),
    "expectedOutput": expected,
    "error": error_message
}))
`
            },
            {
                input: 20,
                checkCode: `
import json
import sys
import io

solution_output = []
for i in range(1, 20 + 1):
    if i % 7 == 0 or '7' in str(i):
        solution_output.append("Lucky")
    else:
        solution_output.append(str(i))
expected = "\\n".join(solution_output)

try:
    user_result = lucky_sevens(20)
    success = user_result == expected
    error_message = None
except Exception as e:
    user_result = str(e)
    success = False
    error_message = str(e)

print(json.dumps({
    "success": success,
    "userOutput": str(user_result),
    "expectedOutput": expected,
    "error": error_message
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
    # ¡Importante! Tu función debe DEVOLVER un número.
    total = 1 # El total inicial debe ser 1
    # ...
    return total
`,
        solution: `def sum_product(n):
    total = 1
    for i in range(1, n + 1):
        if i % 2 == 0:
            total += i
        else:
            total *= i
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

try:
    user_result = sum_product(5)
    success = user_result == expected
    error_message = None
except Exception as e:
    user_result = str(e)
    success = False
    error_message = str(e)

print(json.dumps({
    "success": success,
    "userOutput": str(user_result),
    "expectedOutput": str(expected),
    "error": error_message
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
    # ¡Importante! Tu función debe DEVOLVER un número.
    pass
`,
        solution: `def count_vowels(s):
    count = 0
    vowels = "aeiou"
    for char in s.lower():
        if char in vowels:
            count += 1
    return count
`,
        testCases: [
            {
                input: "Hola Mundo",
                checkCode: `
import json
expected = 4
try:
    user_result = count_vowels("Hola Mundo")
    success = user_result == expected
    error_message = None
except Exception as e:
    user_result = str(e)
    success = False
    error_message = str(e)

print(json.dumps({ "success": success, "userOutput": str(user_result), "expectedOutput": expected, "error": error_message }))
`
            },
            {
                input: "Python Es Genial",
                checkCode: `
import json
expected = 5
try:
    user_result = count_vowels("Python Es Genial")
    success = user_result == expected
    error_message = None
except Exception as e:
    user_result = str(e)
    success = False
    error_message = str(e)

print(json.dumps({ "success": success, "userOutput": str(user_result), "expectedOutput": expected, "error": error_message }))
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
    # ¡Importante! Tu función debe DEVOLVER una cadena.
    pass
`,
        solution: `def reverse_words(sentence):
    words = sentence.split()
    return " ".join(words[::-1])
`,
        testCases: [
            {
                input: "Python es genial",
                checkCode: `
import json
expected = "genial es Python"
try:
    user_result = reverse_words("Python es genial")
    success = user_result == expected
    error_message = None
except Exception as e:
    user_result = str(e)
    success = False
    error_message = str(e)

print(json.dumps({ "success": success, "userOutput": str(user_result), "expectedOutput": expected, "error": error_message }))
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
    # ¡Importante! Tu función debe DEVOLVER True o False.
    pass
`,
        solution: `def valid_password(pwd):
    has_number = any(char.isdigit() for char in pwd)
    has_length = len(pwd) >= 8
    return has_number and has_length
`,
        testCases: [
            {
                input: "pass1234",
                checkCode: `
import json
expected = True
try:
    user_result = valid_password("pass1234")
    success = user_result == expected
    error_message = None
except Exception as e:
    user_result = str(e)
    success = False
    error_message = str(e)
print(json.dumps({ "success": success, "userOutput": str(user_result), "expectedOutput": str(expected), "error": error_message }))
`
            },
            {
                input: "password",
                checkCode: `
import json
expected = False
try:
    user_result = valid_password("password")
    success = user_result == expected
    error_message = None
except Exception as e:
    user_result = str(e)
    success = False
    error_message = str(e)
print(json.dumps({ "success": success, "userOutput": str(user_result), "expectedOutput": str(expected), "error": error_message }))
`
            },
            {
                input: "p4ss",
                checkCode: `
import json
expected = False
try:
    user_result = valid_password("p4ss")
    success = user_result == expected
    error_message = None
except Exception as e:
    user_result = str(e)
    success = False
    error_message = str(e)
print(json.dumps({ "success": success, "userOutput": str(user_result), "expectedOutput": str(expected), "error": error_message }))
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
    # ¡Importante! Tu función debe DEVOLVER una lista de números.
    pass
`,
        solution: `def triangular_numbers(n):
    result = []
    for i in range(1, n + 1):
        result.append(i * (i + 1) // 2)
    return result
`,
        testCases: [
            {
                input: 5,
                checkCode: `
import json
expected = [i*(i+1)//2 for i in range(1, 5 + 1)]
try:
    user_result = triangular_numbers(5)
    success = user_result == expected
    error_message = None
except Exception as e:
    user_result = str(e)
    success = False
    error_message = str(e)
print(json.dumps({ "success": success, "userOutput": str(user_result), "expectedOutput": str(expected), "error": error_message }))
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
    # ¡Importante! Tu función debe DEVOLVER un número.
    pass
`,
        solution: `def factorial(n):
    if n == 0:
        return 1
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result
`,
        testCases: [
            {
                input: 5,
                checkCode: `
import json
import math
expected = math.factorial(5)
try:
    user_result = factorial(5)
    success = user_result == expected
    error_message = None
except Exception as e:
    user_result = str(e)
    success = False
    error_message = str(e)
print(json.dumps({ "success": success, "userOutput": str(user_result), "expectedOutput": str(expected), "error": error_message }))
`
            },
            {
                input: 0,
                checkCode: `
import json
import math
expected = math.factorial(0)
try:
    user_result = factorial(0)
    success = user_result == expected
    error_message = None
except Exception as e:
    user_result = str(e)
    success = False
    error_message = str(e)
print(json.dumps({ "success": success, "userOutput": str(user_result), "expectedOutput": str(expected), "error": error_message }))
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
    # ¡Importante! Tu función debe DEVOLVER un número o None.
    pass
`,
        solution: `def find_max(numbers):
    if not numbers:
        return None
    max_num = numbers[0]
    for num in numbers[1:]:
        if num > max_num:
            max_num = num
    return max_num
`,
        testCases: [
            {
                input: [1, 5, 2, 9, 3],
                checkCode: `
import json
expected = 9
try:
    user_result = find_max([1, 5, 2, 9, 3])
    success = user_result == expected
    error_message = None
except Exception as e:
    user_result = str(e)
    success = False
    error_message = str(e)
print(json.dumps({ "success": success, "userOutput": str(user_result), "expectedOutput": str(expected), "error": error_message }))
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
    # ¡Importante! Tu función debe DEVOLVER un número.
    pass
`,
        solution: `def digit_sum(n):
    total = 0
    s = str(n)
    for digit in s:
        total += int(digit)
    return total
`,
        testCases: [
            {
                input: 123,
                checkCode: `
import json
expected = 6
try:
    user_result = digit_sum(123)
    success = user_result == expected
    error_message = None
except Exception as e:
    user_result = str(e)
    success = False
    error_message = str(e)
print(json.dumps({ "success": success, "userOutput": str(user_result), "expectedOutput": str(expected), "error": error_message }))
`
            },
            {
                input: 987,
                checkCode: `
import json
expected = 24
try:
    user_result = digit_sum(987)
    success = user_result == expected
    error_message = None
except Exception as e:
    user_result = str(e)
    success = False
    error_message = str(e)
print(json.dumps({ "success": success, "userOutput": str(user_result), "expectedOutput": str(expected), "error": error_message }))
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
    # ¡Importante! Tu función debe DEVOLVER una cadena.
    # No imprimas el resultado en la consola.
    pass
`,
        solution: `def print_pattern(n):
    lines = []
    for i in range(1, n + 1):
        lines.append("*" * i)
    for i in range(n - 1, 0, -1):
        lines.append("*" * i)
    return "\\n".join(lines)
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
try:
    user_result = print_pattern(3)
    success = user_result == expected
    error_message = None
except Exception as e:
    user_result = str(e)
    success = False
    error_message = str(e)
print(json.dumps({ "success": success, "userOutput": str(user_result), "expectedOutput": expected, "error": error_message }))
`
            }
        ]
    }
];