export module ArrayUtils{
    
    export function shuffle(array: Array<any>): Array<any> {
        let currentIndex = array.length;
        let randomIndex: number;

        while (currentIndex != 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          
          [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }
}