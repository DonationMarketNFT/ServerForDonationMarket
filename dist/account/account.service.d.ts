import { CreateAccountDto } from './dto/create-account.dto';
import { Account } from './entities/account.entity';
import { Repository } from 'typeorm';
import { UpdateAccountDto } from './dto/update-account.dto';
import { UpdateAccountAccessTokenDto } from './dto/update-accoutAccessToken.dto';
import { UpdateAccountWalletDto } from './dto/update-account-wallet.dto';
import { UpdateAccountNickNameDto } from './dto/update-account-nickname.dto';
export declare class AccountService {
    private accountsRepository;
    constructor(accountsRepository: Repository<Account>);
    findAll(): Promise<Account[]>;
    findByUserOne(id: string): Promise<Account>;
    create(account: CreateAccountDto): Promise<void>;
    deleteUser(id: string): Promise<boolean>;
    setUser(id: number, updateAccountDto: UpdateAccountDto): Promise<boolean>;
    updateAccessToken(id: number, updateAccountAccessTokenDto: UpdateAccountAccessTokenDto): Promise<boolean>;
    setWallet(id: number, updateAccountWalletDto: UpdateAccountWalletDto): Promise<boolean>;
    setNickName(id: number, updateAccountNickNameDto: UpdateAccountNickNameDto): Promise<boolean>;
}
