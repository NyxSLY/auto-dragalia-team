import { img } from '@/assets/images';
import { clickImage, tryClickImage, waitAndClickImage } from '@/utils/image';
import { wait } from '@/utils/wait';

export async function repeatInfinitePool(): Promise<void> {
  await tryToBeCaptain();
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
  tryClickImage(img.stillStartButtonRed); // 这里是红色按钮
  tryClickImage(img.closeButton);
}
