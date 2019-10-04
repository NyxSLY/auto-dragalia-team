//公会特别版 -- 人数不足也开

import { img } from '@/assets/images';
import { clickImage, tryClickImage, waitAndClickImage } from '@/utils/image';
import { wait } from '@/utils/wait';
import { tryTransform2dragon } from '@/utils/battle';

export async function repeatInfinitePoolGuild(): Promise<void> {
  await tryToBeCaptain();
  tryTransform2dragon();
  await tryRepeatWithStaminaTeamMember();
}

async function tryRepeatWithStaminaTeamMember(): Promise<void> {
  try {
    await repeatWithStamina();
  } catch {
    tryClickImage(img.continueButtonRed);
  }
}

async function repeatWithStamina(): Promise<void> {
  const pos: Point = clickImage(img.continueButtonRed);
  await waitAndClickImage(img.nextBattleBlue, { timeout: 5e3 });
}

async function tryToBeCaptain(): Promise<void> {
  try {
    await captainReady();
  } catch {
    tryClickImage(img.teamReadyButton);
  }
}

async function captainReady(): Promise<void> {
  const pos: Point = clickImage(img.startBattleButton);
  await wait(1000);
  tryClickImage(img.not4pplStart);
  tryClickImage(img.stillStartButtonRed); // 这里是红色按钮
  tryClickImage(img.closeButton);
  tryClickImage(img.not4pplStart);
}
