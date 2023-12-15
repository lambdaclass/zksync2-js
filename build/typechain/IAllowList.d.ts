/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IAllowListInterface extends ethers.utils.Interface {
  functions: {
    "canCall(address,address,bytes4)": FunctionFragment;
    "getAccessMode(address)": FunctionFragment;
    "getTokenDepositLimitData(address)": FunctionFragment;
    "hasSpecialAccessToCall(address,address,bytes4)": FunctionFragment;
    "setAccessMode(address,uint8)": FunctionFragment;
    "setBatchAccessMode(address[],uint8[])": FunctionFragment;
    "setBatchPermissionToCall(address[],address[],bytes4[],bool[])": FunctionFragment;
    "setDepositLimit(address,bool,uint256)": FunctionFragment;
    "setPermissionToCall(address,address,bytes4,bool)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "canCall",
    values: [string, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getAccessMode",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenDepositLimitData",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasSpecialAccessToCall",
    values: [string, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setAccessMode",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setBatchAccessMode",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setBatchPermissionToCall",
    values: [string[], string[], BytesLike[], boolean[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setDepositLimit",
    values: [string, boolean, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPermissionToCall",
    values: [string, string, BytesLike, boolean]
  ): string;

  decodeFunctionResult(functionFragment: "canCall", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAccessMode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenDepositLimitData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasSpecialAccessToCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAccessMode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBatchAccessMode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBatchPermissionToCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDepositLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPermissionToCall",
    data: BytesLike
  ): Result;

  events: {
    "UpdateAccessMode(address,uint8,uint8)": EventFragment;
    "UpdateCallPermission(address,address,bytes4,bool)": EventFragment;
    "UpdateDepositLimit(address,bool,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "UpdateAccessMode"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateCallPermission"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateDepositLimit"): EventFragment;
}

export class IAllowList extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IAllowListInterface;

  functions: {
    canCall(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "canCall(address,address,bytes4)"(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    getAccessMode(
      _target: string,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "getAccessMode(address)"(
      _target: string,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    getTokenDepositLimitData(
      _l1Token: string,
      overrides?: CallOverrides
    ): Promise<{
      0: {
        depositLimitation: boolean;
        depositCap: BigNumber;
        0: boolean;
        1: BigNumber;
      };
    }>;

    "getTokenDepositLimitData(address)"(
      _l1Token: string,
      overrides?: CallOverrides
    ): Promise<{
      0: {
        depositLimitation: boolean;
        depositCap: BigNumber;
        0: boolean;
        1: BigNumber;
      };
    }>;

    hasSpecialAccessToCall(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "hasSpecialAccessToCall(address,address,bytes4)"(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    setAccessMode(
      _target: string,
      _accessMode: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setAccessMode(address,uint8)"(
      _target: string,
      _accessMode: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setBatchAccessMode(
      _targets: string[],
      _accessMode: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setBatchAccessMode(address[],uint8[])"(
      _targets: string[],
      _accessMode: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setBatchPermissionToCall(
      _callers: string[],
      _targets: string[],
      _functionSigs: BytesLike[],
      _enables: boolean[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setBatchPermissionToCall(address[],address[],bytes4[],bool[])"(
      _callers: string[],
      _targets: string[],
      _functionSigs: BytesLike[],
      _enables: boolean[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setDepositLimit(
      _l1Token: string,
      _depositLimitation: boolean,
      _depositCap: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setDepositLimit(address,bool,uint256)"(
      _l1Token: string,
      _depositLimitation: boolean,
      _depositCap: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setPermissionToCall(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      _enable: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setPermissionToCall(address,address,bytes4,bool)"(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      _enable: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  canCall(
    _caller: string,
    _target: string,
    _functionSig: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "canCall(address,address,bytes4)"(
    _caller: string,
    _target: string,
    _functionSig: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getAccessMode(_target: string, overrides?: CallOverrides): Promise<number>;

  "getAccessMode(address)"(
    _target: string,
    overrides?: CallOverrides
  ): Promise<number>;

  getTokenDepositLimitData(
    _l1Token: string,
    overrides?: CallOverrides
  ): Promise<{
    depositLimitation: boolean;
    depositCap: BigNumber;
    0: boolean;
    1: BigNumber;
  }>;

  "getTokenDepositLimitData(address)"(
    _l1Token: string,
    overrides?: CallOverrides
  ): Promise<{
    depositLimitation: boolean;
    depositCap: BigNumber;
    0: boolean;
    1: BigNumber;
  }>;

  hasSpecialAccessToCall(
    _caller: string,
    _target: string,
    _functionSig: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "hasSpecialAccessToCall(address,address,bytes4)"(
    _caller: string,
    _target: string,
    _functionSig: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  setAccessMode(
    _target: string,
    _accessMode: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setAccessMode(address,uint8)"(
    _target: string,
    _accessMode: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setBatchAccessMode(
    _targets: string[],
    _accessMode: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setBatchAccessMode(address[],uint8[])"(
    _targets: string[],
    _accessMode: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setBatchPermissionToCall(
    _callers: string[],
    _targets: string[],
    _functionSigs: BytesLike[],
    _enables: boolean[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setBatchPermissionToCall(address[],address[],bytes4[],bool[])"(
    _callers: string[],
    _targets: string[],
    _functionSigs: BytesLike[],
    _enables: boolean[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setDepositLimit(
    _l1Token: string,
    _depositLimitation: boolean,
    _depositCap: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setDepositLimit(address,bool,uint256)"(
    _l1Token: string,
    _depositLimitation: boolean,
    _depositCap: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setPermissionToCall(
    _caller: string,
    _target: string,
    _functionSig: BytesLike,
    _enable: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setPermissionToCall(address,address,bytes4,bool)"(
    _caller: string,
    _target: string,
    _functionSig: BytesLike,
    _enable: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    canCall(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "canCall(address,address,bytes4)"(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getAccessMode(_target: string, overrides?: CallOverrides): Promise<number>;

    "getAccessMode(address)"(
      _target: string,
      overrides?: CallOverrides
    ): Promise<number>;

    getTokenDepositLimitData(
      _l1Token: string,
      overrides?: CallOverrides
    ): Promise<{
      depositLimitation: boolean;
      depositCap: BigNumber;
      0: boolean;
      1: BigNumber;
    }>;

    "getTokenDepositLimitData(address)"(
      _l1Token: string,
      overrides?: CallOverrides
    ): Promise<{
      depositLimitation: boolean;
      depositCap: BigNumber;
      0: boolean;
      1: BigNumber;
    }>;

    hasSpecialAccessToCall(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "hasSpecialAccessToCall(address,address,bytes4)"(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setAccessMode(
      _target: string,
      _accessMode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setAccessMode(address,uint8)"(
      _target: string,
      _accessMode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setBatchAccessMode(
      _targets: string[],
      _accessMode: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "setBatchAccessMode(address[],uint8[])"(
      _targets: string[],
      _accessMode: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    setBatchPermissionToCall(
      _callers: string[],
      _targets: string[],
      _functionSigs: BytesLike[],
      _enables: boolean[],
      overrides?: CallOverrides
    ): Promise<void>;

    "setBatchPermissionToCall(address[],address[],bytes4[],bool[])"(
      _callers: string[],
      _targets: string[],
      _functionSigs: BytesLike[],
      _enables: boolean[],
      overrides?: CallOverrides
    ): Promise<void>;

    setDepositLimit(
      _l1Token: string,
      _depositLimitation: boolean,
      _depositCap: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setDepositLimit(address,bool,uint256)"(
      _l1Token: string,
      _depositLimitation: boolean,
      _depositCap: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setPermissionToCall(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      _enable: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "setPermissionToCall(address,address,bytes4,bool)"(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      _enable: boolean,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    UpdateAccessMode(
      target: string | null,
      previousMode: null,
      newMode: null
    ): EventFilter;

    UpdateCallPermission(
      caller: string | null,
      target: string | null,
      functionSig: BytesLike | null,
      status: null
    ): EventFilter;

    UpdateDepositLimit(
      l1Token: string | null,
      depositLimitation: null,
      depositCap: null
    ): EventFilter;
  };

  estimateGas: {
    canCall(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "canCall(address,address,bytes4)"(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAccessMode(
      _target: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAccessMode(address)"(
      _target: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenDepositLimitData(
      _l1Token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getTokenDepositLimitData(address)"(
      _l1Token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasSpecialAccessToCall(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "hasSpecialAccessToCall(address,address,bytes4)"(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setAccessMode(
      _target: string,
      _accessMode: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setAccessMode(address,uint8)"(
      _target: string,
      _accessMode: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setBatchAccessMode(
      _targets: string[],
      _accessMode: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setBatchAccessMode(address[],uint8[])"(
      _targets: string[],
      _accessMode: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    setBatchPermissionToCall(
      _callers: string[],
      _targets: string[],
      _functionSigs: BytesLike[],
      _enables: boolean[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setBatchPermissionToCall(address[],address[],bytes4[],bool[])"(
      _callers: string[],
      _targets: string[],
      _functionSigs: BytesLike[],
      _enables: boolean[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    setDepositLimit(
      _l1Token: string,
      _depositLimitation: boolean,
      _depositCap: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setDepositLimit(address,bool,uint256)"(
      _l1Token: string,
      _depositLimitation: boolean,
      _depositCap: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setPermissionToCall(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      _enable: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setPermissionToCall(address,address,bytes4,bool)"(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      _enable: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    canCall(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "canCall(address,address,bytes4)"(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAccessMode(
      _target: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAccessMode(address)"(
      _target: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokenDepositLimitData(
      _l1Token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getTokenDepositLimitData(address)"(
      _l1Token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasSpecialAccessToCall(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "hasSpecialAccessToCall(address,address,bytes4)"(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setAccessMode(
      _target: string,
      _accessMode: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setAccessMode(address,uint8)"(
      _target: string,
      _accessMode: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setBatchAccessMode(
      _targets: string[],
      _accessMode: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setBatchAccessMode(address[],uint8[])"(
      _targets: string[],
      _accessMode: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setBatchPermissionToCall(
      _callers: string[],
      _targets: string[],
      _functionSigs: BytesLike[],
      _enables: boolean[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setBatchPermissionToCall(address[],address[],bytes4[],bool[])"(
      _callers: string[],
      _targets: string[],
      _functionSigs: BytesLike[],
      _enables: boolean[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setDepositLimit(
      _l1Token: string,
      _depositLimitation: boolean,
      _depositCap: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setDepositLimit(address,bool,uint256)"(
      _l1Token: string,
      _depositLimitation: boolean,
      _depositCap: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setPermissionToCall(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      _enable: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setPermissionToCall(address,address,bytes4,bool)"(
      _caller: string,
      _target: string,
      _functionSig: BytesLike,
      _enable: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
