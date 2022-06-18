import { CreateAccountWcDto } from './dto/create-accountWc.dto';
import { AccountWc } from './entities/accountWc.entity';
import { Repository } from 'typeorm';
import { UpdateAccountWcNickNameDto } from './dto/update-accountWcNickName.dto';
export declare class AccountWcService {
    private accountWcsRepository;
    constructor(accountWcsRepository: Repository<AccountWc>);
    findAll(): Promise<AccountWc[]>;
    findByUserAddr(id: string): Promise<AccountWc>;
    findByUserOne(id: string): Promise<AccountWc>;
    create(account: CreateAccountWcDto): Promise<void>;
    deleteUser(id: string): Promise<boolean>;
    updateUserNickName(id: number, updateAccountWcDto: UpdateAccountWcNickNameDto): Promise<boolean>;
}
