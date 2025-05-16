edad = 19
tieneLicencia = True

if edad >= 18:
  print("Es mayor de edad")
  if tieneLicencia:
    print("Tiene licencia, puede conducir")
  else:
    print("No tiene licencia, no puede conducir")
else:
  print("No es mayor de edad, no puede conducir")