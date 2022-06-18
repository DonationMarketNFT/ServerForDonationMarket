import { AccountService } from './account.service';
import { Account } from './entities/account.entity';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { UpdateAccountAccessTokenDto } from './dto/update-accoutAccessToken.dto';
import { UpdateAccountWalletDto } from './dto/update-account-wallet.dto';
import { UpdateAccountNickNameDto } from './dto/update-account-nickname.dto';
export declare class AccountController {
    private readonly accountService;
    constructor(accountService: AccountService);
    findAll(): Promise<Account[]>;
    findByUserOneEmailQuery(id: string): Promise<Account>;
    findByUserOneEmailParam(id: string): Promise<Account>;
    create(account: CreateAccountDto): Promise<void>;
    deleteUserQuery(id: string): Promise<boolean>;
    deleteUserParam(id: string): Promise<boolean>;
    setUser(id: number, updateAccountDto: UpdateAccountDto): Promise<boolean>;
    updateAccessToken(id: number, updateAccountAccessTokenDto: UpdateAccountAccessTokenDto): Promise<boolean>;
    setWallet(id: number, updateAccountWalletDto: UpdateAccountWalletDto): Promise<boolean>;
    setNickName(id: number, updateAccountNickNameDto: UpdateAccountNickNameDto): Promise<boolean>;
}
