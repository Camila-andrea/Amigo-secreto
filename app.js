using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        // Lista de participantes
        List<string> participantes = new List<string> { "Ana", "Juan", "Luis", "Carla", "Marta" };

        // Crear asignaciones de amigo secreto
        Dictionary<string, string> asignaciones = AsignarAmigos(participantes);

        // Mostrar resultados
        Console.WriteLine("Asignaciones de Amigo Secreto:");
        foreach (var asignacion in asignaciones)
        {
            Console.WriteLine($"{asignacion.Key} -> {asignacion.Value}");
        }

        Console.WriteLine("\nPresiona cualquier tecla para salir...");
        Console.ReadKey();
    }

    static Dictionary<string, string> AsignarAmigos(List<string> participantes)
    {
        Random rnd = new Random();
        List<string> disponibles = new List<string>(participantes);
        Dictionary<string, string> asignaciones = new Dictionary<string, string>();

        foreach (string participante in participantes)
        {
            List<string> posibles = new List<string>(disponibles);
            posibles.Remove(participante); // nadie puede ser su propio amigo secreto

            if (posibles.Count == 0)
            {
                // Si llega al final y solo queda la misma persona, volvemos a mezclar todo
                return AsignarAmigos(participantes);
            }

            string elegido = posibles[rnd.Next(posibles.Count)];
            asignaciones[participante] = elegido;
            disponibles.Remove(elegido);
        }

        return asignaciones;
    }
}
