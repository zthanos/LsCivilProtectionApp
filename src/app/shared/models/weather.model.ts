export interface OpenWeatherResponse {
    cod: string;
    message: number;
    cnt: number;
    list?: (ListEntity)[] | null;
    city: City;
}
export interface ListEntity {
    dt: number;
    main: Main;
    weather?: (WeatherEntity)[] | null;
    clouds: Clouds;
    wind: Wind;
    sys: Sys;
    dt_txt: string;
    rain?: Rain | null;
}
export interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
}
export interface WeatherEntity {
    id: number;
    main: string;
    description: string;
    icon: string;
}
export interface Clouds {
    all: number;
}
export interface Wind {
    speed: number;
    deg: number;
}
export interface Sys {
    pod: string;
}
export interface Rain {
    //3h: number;
}

export interface City {
    id: number;
    name: string;
    coord: Coord;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
}
export interface Coord {
    lat: number;
    lon: number;
}

export interface WeatherModel {
    Temprature: number;
    FeelsLike: number;
    Description: string;
    Icon: string;

}

export interface DailyWeather {
    Temprature: string;
    Description: string;
    Icon: string;
    CurrentDate: string;
    Date_string: string;
}


