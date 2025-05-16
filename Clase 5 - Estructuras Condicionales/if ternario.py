# if ternario
edad = 19

# print("eres mayor de edad") if edad >= 18 else print("eres menor de edad")
# print( "eres mayor de edad" if edad >= 18 else "eres menor de edad")
# mensaje = "eres mayor de edad" if edad >= 18 else "eres menor de edad"

mensaje = f"eres {'mayor' if edad >= 18 else 'menor'} de edad"
print(mensaje)
