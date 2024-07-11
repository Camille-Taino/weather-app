type WeatherData = {
    name: string;
    main:{
        temp:number;
    };
    weather: Array<{
        description: string;
    }>;
};
 export default WeatherData;