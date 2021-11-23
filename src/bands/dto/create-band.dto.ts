import { IsString } from "class-validator";

export class CreateBandDto {
    @IsString()
    name: string;
}
