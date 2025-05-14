# if ternario
edad = 18

# mensaje = "Eres menor de edad" if edad < 18 else "Eres mayor de edad"
mensaje = f"Eres {'mayor' if edad >= 18 else 'menor'} de edad"

print(mensaje)
print("Fin del programa.")