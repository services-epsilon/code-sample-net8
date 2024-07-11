// See https://aka.ms/new-console-template for more information

var variable = "hello";

if(variable == "toto") 
{
    Console.WriteLine("Hello, World 1!");
}

double valeur = 2.0;

var numbers = new List<int>();
numbers.Add(valeur);

Console.WriteLine(Add("Hello", "World 2!"));

static string Add(string a, string b)
{
    return a + b;
}