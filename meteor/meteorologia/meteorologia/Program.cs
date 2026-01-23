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

Console.WriteLine("Adja meg egy város kódját: ");
var cityInput = Console.ReadLine();
var selectedCity = weatherData.Where(x => x.City == cityInput).Select(x => x.Time);

