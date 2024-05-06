export abstract class Utils {
  public static generateRandomName(): string {
    const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
    const consonants: string[] = [
      'b',
      'c',
      'd',
      'f',
      'g',
      'h',
      'j',
      'k',
      'l',
      'm',
      'n',
      'p',
      'q',
      'r',
      's',
      't',
      'v',
      'w',
      'x',
      'y',
      'z',
    ];

    const randomNameLength: number = Math.floor(Math.random() * 5) + 4; // Random length between 4 and 8
    let name: string = '';

    // Generate the name
    for (let i: number = 0; i < randomNameLength; i++) {
      if (i % 2 === 0) {
        // Even index, add a consonant
        name += consonants[Math.floor(Math.random() * consonants.length)];
      } else {
        // Odd index, add a vowel
        name += vowels[Math.floor(Math.random() * vowels.length)];
      }
    }

    // Capitalize the first letter
    name = name.charAt(0).toUpperCase() + name.slice(1);

    return name;
  }
}
