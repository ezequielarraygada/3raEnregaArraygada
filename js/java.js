let EdadIngreso = prompt(`Respondad con su edad para verificar si es mayor de edad`)
let Mayor18 = EdadIngreso >= 18
console.log(Mayor18)
if (Mayor18){
    alert (`Su edad es ${EdadIngreso}, puede acceder.`)}
else { alert (`Su edad es ${EdadIngreso}, no puede acceder
    El acceso es solo para mayores de edad.`)
}