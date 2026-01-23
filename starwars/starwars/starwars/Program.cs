using starwars;
using System.Text;

var fileData = await File.ReadAllLinesAsync("star-wars.csv", Encoding.UTF8);

var characters = new List<Characters>();

foreach(var line in fileData.Skip(1))
{
    var data = line.Split(',');
    characters.Add(new Characters
    {
        Name = data[0],
        Order = data[1],
        LightSaberColor = data[2],
        MidichlorianCount = int.Parse(data[3])
    });
}

var jediCount = characters.Count(c => c.Order == "Jedi");
var sithCount = characters.Count(c => c.Order == "Sith");
Console.WriteLine($"A jedik száma {jediCount} \n A sithek száma {sithCount}");

//Milyen lézerkard szinek vannak es abbol hany db?

var lightSaberColors = characters
    .GroupBy(x => x.LightSaberColor)
    .Select(x => new { Color = x.Key, Count = x.Count() });

foreach (var color in lightSaberColors)
{
    Console.WriteLine($"{color.Color} - {color.Count}");
}

var sumOfMidochlorian = characters.Sum(x => x.MidichlorianCount);
var averageOfMidochlorian = characters.Average(x => x.MidichlorianCount);

Console.WriteLine($"Az átlag Midoklórián szám: {Math.Round(averageOfMidochlorian, 2)} \n Az összes Midoklórián szám: {sumOfMidochlorian}");

var leastMidochlorian = characters.Min(x => x.MidichlorianCount);
var charactersWithLeastMidochlorian = characters.Where(X => X.MidichlorianCount == leastMidochlorian).ToList();

foreach (var data in charactersWithLeastMidochlorian)
{
    Console.WriteLine($"A legkevesebb Midoklórián szám {leastMidochlorian}, amivel {data.Name} rendelkezik");
}

var characterWithLeastMidochlorian = characters.MinBy(x => x.MidichlorianCount);

Console.WriteLine($"A legkevesebb Midoklórián szám {characterWithLeastMidochlorian.MidichlorianCount} amivel {characterWithLeastMidochlorian.Name} rendelkezik");





