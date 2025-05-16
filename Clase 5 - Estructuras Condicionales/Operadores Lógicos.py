# Operadores Lógicos

# &&: AND lógico - Y lógico
# Solo devuelve true si ambos operandos son verdaderos
print(True and True) # true
print(True and False) # false
print(False and True) # false
print(False and False) # false
tieneLicencia = True
sabeManejar = True
print(tieneLicencia and sabeManejar) # true

# ||: OR lógico - O lógico
# Solo devuelve true si al menos uno de los operandos es verdadero
print(True or True) # true
print(True or False) # true
print(False or True) # true
print(False or False) # false
esFinDeSemana = True
estoyDeVacaciones = True
print(esFinDeSemana or estoyDeVacaciones) # True

# !: NOT lógico
# Devuelve true si el operando es falso, y viceversa
print(not True) # false
print(not False) # true
estasLloviendo = False
print(not estasLloviendo) # True --> esta agradable