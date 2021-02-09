const animals = [
    { name: "cat", sound: "meow" },
    { name: "dog", sound: "woof" },
    { name: "bird", sound: "tweet" }
];

function useAnimals(animal) {
    return [
        animal.name,
        function () {
            console.log(animal.sound);
        }
    ];
}

export default animals;
export { useAnimals };