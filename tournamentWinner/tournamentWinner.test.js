const tournamentWinner = require('./tournamentWinner');

test('Test 1', () => {
    expect(tournamentWinner([
        ["HTML", "C#"],
        ["C#", "Python"],
        ["Python", "HTML"]
    ], [0, 0, 1])).toBe('Python')
})

test('Test 2', () => {
    expect(tournamentWinner([
        ["HTML", "Java"],
        ["Java", "Python"],
        ["Python", "HTML"]
    ], [0, 1, 1])).toBe('Java')
})

test('Test 3', () => {
    expect(tournamentWinner([
        ["HTML", "Java"],
        ["Java", "Python"],
        ["Python", "HTML"],
        ["C#", "Python"],
        ["Java", "C#"],
        ["C#", "HTML"]
    ], [0, 1, 1, 1, 0, 1])).toBe('C#')
})

test('Test 4', () => {
    expect(tournamentWinner([
        ["HTML", "Java"],
        ["Java", "Python"],
        ["Python", "HTML"],
        ["C#", "Python"],
        ["Java", "C#"],
        ["C#", "HTML"],
        ["SQL", "C#"],
        ["HTML", "SQL"],
        ["SQL", "Python"],
        ["SQL", "Java"]
    ], [0, 1, 1, 1, 0, 1, 0, 1, 1, 0])).toBe('C#')
})

test('Test 5', () => {
    expect(tournamentWinner([["Bulls", "Eagles"]], [1])).toBe('Bulls')
})