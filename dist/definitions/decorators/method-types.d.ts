import { IModelResolver } from "treacherous";
export declare type AppliesIfFunction = (modelResolver: IModelResolver, value: any, ruleOptions?: any) => boolean;
export declare type MessageOverrideFunction = (value: any, ruleOptions?: any) => string;
