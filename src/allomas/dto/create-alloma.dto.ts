import { IsIP, IsInt, IsNotEmpty, IsOptional, IsPositive, IsString, Max, Min, isIP } from "class-validator"

export class CreateAllomaDto {
    @IsNotEmpty({message: "Nem lehet üres ez a mező"})
    location: string

    @IsNotEmpty({message: "Nem lehet üres ez a mező"})
    @IsString({message: "Ez a mező csak szöveg tipusú lehet"})
    @IsIP(4 ,{message: "helytelen ip formátum"})
    ipAddress: string

    @IsOptional()
    @IsPositive({message: "Nem lehet negatív ez a mező"})
    @IsInt({message: "Csak számot adhat meg"})
    batteryCapacity: number

    @IsInt({message: "Csak számot adhat meg"})
    @Min(0,{message: "Nem lehet nullánákl kisebb érték"})
    @Max(100,{message: "Nem lehet száznál nagyobb érték"})
    batteryCharge: number
}
