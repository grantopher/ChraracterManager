export class Dice {
    public static D(sides: number): number {
        return Math.ceil(
            Math.random() * sides
        );
    }
}
