import { img } from '@/assets/images';
import { tryTransform2dragon } from '@/utils/battle';
import { clickImage, tryClickImage, waitAndClickImage } from '@/utils/image';
import { wait } from '@/utils/wait';

export async function repeatInfinitePool(): Promise<void> {
  // 队长部分
  await tryToBeCaptain();
  await tryRepeatWithStaminaTeamMember();
}

async function tryRepeatWithStaminaTeamMember(): Promise<void> {
  try {
    await repeatWithStamina();
  } catch {
    tryClickImage(img.continueButtonRed);
    device.vibrate(1000);
  }
}

async function repeatWithStamina(): Promise<void> {
  const pos: Point = clickImage(img.continueButtonRed);
  await waitAndClickImage(img.nextBattleBlue);
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
  await wait(3000);
  tryClickImage(img.stillStartButton);
  tryClickImage(img.closeButton);
}
