
export module TimeUtils{
    function getMinutesPart(timeInSeconds: number): number{
        return Math.trunc(timeInSeconds / 60);
    }
    
     function getSecondsPart(timeInSeconds: number): number{
        return timeInSeconds % 60;
    }
    
    export function getTimeAsString(timeInSeconds: number): string{
        return `${getMinutesPart(timeInSeconds)} min ${getSecondsPart(timeInSeconds)} s`;
    }    
}
    


