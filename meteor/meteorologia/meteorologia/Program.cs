using meteorologia;
using System.Text;

var fileData = await File.ReadAllLinesAsync("tavirathu13.txt", Encoding.UTF8);

var weatherData = new List<WeatherData>();

foreach (var line in fileData)
{
    var data = line.Split(" ");
    weatherData.Add(new WeatherData
    {
        City = data[0],
        Time = data[1],
        WindDirectionAndSpeed = data[2],
        Temperature = int.Parse(data[3])
    });
}

Console.WriteLine("2. feladat");
Console.WriteLine("Adja meg egy város kódját: ");
var cityInput = Console.ReadLine();
var selectedCityTime = weatherData.Where(x => x.City == cityInput).OrderByDescending(x => x.Time).First();
string formatTime = selectedCityTime.Time.Insert(2, ":");
Console.WriteLine($"A legutolsó mérés erről a településről {formatTime}-kor érkezett.");

Console.WriteLine("3. feladat");
var lowestTemp = weatherData.MinBy(x => x.Temperature);
var highestTemp = weatherData.MaxBy(x => x.Temperature);

Console.WriteLine($"A legalacsonyabb hőmérséklet: {lowestTemp.City} {lowestTemp.Time.Insert(2, ":")} {lowestTemp.Temperature} fok");
Console.WriteLine($"A legmagasabb hőmérséklet: {highestTemp.City} {highestTemp.Time.Insert(2, ":")} {highestTemp.Temperature} fok");

Console.WriteLine("4. feladat");
var noWind = weatherData.Where(x => x.WindDirectionAndSpeed == "00000").ToList();

foreach (var instance in noWind)
{
    Console.WriteLine($"{instance.City} {instance.Time.Insert(2, ":")}");
}

Console.WriteLine("5. feladat");

//Kozephomerseklettel foglalkozok kesobb
var allTimes = weatherData.Select(x => x.Time).ToList();





