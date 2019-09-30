import { farmRareItem } from '@/tasks/farmRareItem';
import { feedDragon } from '@/tasks/feedDragon';
import { feedFourLeafClover } from '@/tasks/feedFourLeafClover';
import { repeatRaid } from '@/tasks/repeatRaid';
import { repeatRaidTeamm } from '@/tasks/repeatRaidTeamm';
import { repeatRaidTeamSimple } from '@/tasks/repeatRaidTeamSimple';

export const taskRegistry: Record<
  string,
  (() => void | Promise<void>) | undefined
> = {};

export function setupTaskRegistry(): void {
  taskRegistry.重复战斗 = repeatRaid;
  taskRegistry.组队重复战斗 = repeatRaidTeamm;
  taskRegistry.简单组队队员 = repeatRaidTeamSimple;
  taskRegistry.自动喂龙 = feedDragon;
  taskRegistry.喂四叶草 = feedFourLeafClover;
  taskRegistry.刷稀有 = farmRareItem;
}
