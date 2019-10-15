import { autoCombat } from '@/tasks/autoCombat';
import { farmRareItem } from '@/tasks/farmRareItem';
import { feedDragon } from '@/tasks/feedDragon';
import { feedFourLeafClover } from '@/tasks/feedFourLeafClover';
import { repeatInfinitePool } from '@/tasks/repeatInfinitePool';
import { repeatInfinitePoolGuild } from '@/tasks/repeatInfinitePoolGuild';
import { repeatRaid } from '@/tasks/repeatRaid';
import { repeatRaidTeamm } from '@/tasks/repeatRaidTeamm';
import { repeatRaidTeamSimple } from '@/tasks/repeatRaidTeamSimple';
// import { test } from '@/tasks/test';

export const taskRegistry: Record<
  string,
  (() => void | Promise<void>) | undefined
> = {};

export function setupTaskRegistry(): void {
  taskRegistry.重复战斗 = repeatRaid;
  taskRegistry.组队重复战斗 = repeatRaidTeamm;
  taskRegistry.简单组队队员 = repeatRaidTeamSimple;
  taskRegistry.无限池 = repeatInfinitePool;
  taskRegistry.无限池自动战斗 = autoCombat;
  taskRegistry.无限池公会版 = repeatInfinitePoolGuild;
  taskRegistry.刷稀有 = farmRareItem;
  // taskRegistry.text = test;
}
