import { IModelResolver } from "@treacherous/core";
export declare type AppliesIfFunction = (modelResolver: IModelResolver, value: any, ruleOptions?: any) => boolean;
export declare type MessageOverrideFunction = (value: any, ruleOptions?: any) => string;
