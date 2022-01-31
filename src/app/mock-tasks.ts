import { Task } from "./Task" //se importa la interface (esto impide dar formatos incorrectos a las variables) y se crea un array (arreglo o vector) con las diferentes tareas a cumplir
export const TASKS: Task[] = [
    {
        id: 1,
        text: "Completar el módulo de Angular",
        day: "5 de febrero a las 20:00",
        reminder: true,
    },
    {
        id: 2,
        text: "Completar el módulo de bases de datos",
        day: "8 de febrero a las 18:00",
        reminder: true,
    },
    {
        id: 3,
        text: "Ver la masterclass de bases de datos",
        day: "10 de febrero a las 21:00",
        reminder: false,
    },
    {
        id: 4,
        text: "Iniciar con el módulo 5",
        day: "15 de febrero a las 16:00",
        reminder: true,
    },
]