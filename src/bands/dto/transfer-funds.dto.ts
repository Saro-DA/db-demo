import { IsNumber, IsString } from "class-validator";

export class TransferFundsDto {
    @IsNumber()
    from: number;

    @IsNumber()
    to: number;

    @IsNumber()
    amount: number;
}
