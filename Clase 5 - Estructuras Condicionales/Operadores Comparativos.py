# Operadores Comparativos

# print('1' - 1) # error debido al tipado fuerte


# ==: Igualdad
print(1 == 1) # true
print(1 == '1') # false
print(1 == 2) # false
contraseñaCorrecta = "secreto"
contraseñaIngresada = "secreto"
print(contraseñaCorrecta == contraseñaIngresada) # true

# !=: Desigualdad o Inequalidad
print(1 != 1) # false
print(1 != '1') # true
print(1 != 2) # true
print(contraseñaCorrecta != contraseñaIngresada) # false

# >: Mayor que
print(1 > 1) # false
# print(1 > '1') # false # error debido al tipado fuerte
print(1 > 2) # false
print(2 > 1) # true
nivelAgua = 30
nivelCritico = 20
print(nivelAgua > nivelCritico) # true
print("manzana" > "pera") # false
print("manzana" > "mango") # true

# >=: Mayor o igual que
print(1 >= 1) # true
# print(1 >= '1') # false # error debido al tipado fuerte
print(1 >= 2) # false
print(2 >= 1) # true
nivelAgua = 30
nivelCritico = 20
print(nivelAgua >= nivelCritico) # true
print("manzana" >= "pera") # false
print("manzana" >= "mango") # true

# <=: Menor o igual que
print(1 <= 1) # true
# print(1 <= '1') # false # error debido al tipado fuerte
print(1 <= 2) # true
print(2 <= 1) # false
print("manzana" <= "pera") # true