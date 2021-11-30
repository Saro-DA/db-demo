import { IsNumber, IsString } from "class-validator";

export class CreateMemberDto {
    @IsString()
    nickname: string;

    @IsNumber()
    bandId: number;

    @IsNumber()
    instrumentId: number;
}
