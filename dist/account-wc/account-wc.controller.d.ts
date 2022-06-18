import { AccountWcService } from './account-wc.service';
import { AccountWc } from './entities/accountWc.entity';
import { CreateAccountWcDto } from './dto/create-accountWc.dto';
import { UpdateAccountWcNickNameDto } from './dto/update-accountWcNickName.dto';
export declare class AccountWcController {
    private readonly accountWcService;
    constructor(accountWcService: AccountWcService);
    findAll(): Promise<AccountWc[]>;
    findByUserOneAddrParam(addr: string): Promise<AccountWc>;
    findByUserOneNickNameParam(id: string): Promise<AccountWc>;
    create(accountWc: CreateAccountWcDto): Promise<void>;
    deleteUserParam(id: string): Promise<boolean>;
    updateNickName(id: number, updateAccountWcNickNameDto: UpdateAccountWcNickNameDto): Promise<boolean>;
}
