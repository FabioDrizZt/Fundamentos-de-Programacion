edad = 17
tieneLicencia = False
if edad >= 18:
  print("Eres mayor de edad")
  if tieneLicencia:
      print("Tienes licencia")
  else:
      print("No tienes licencia")
else:
    print("Eres menor de edad")
print("Fin del programa.")

# elif
nota = 81
if nota >= 80:
    print("Alumno promocionado")
elif nota >= 60:
    print("Alumno aprobado")
elif nota >= 40:
    print("Alumno aprobado con reserva")
else:
    print("Alumno no aprobado")