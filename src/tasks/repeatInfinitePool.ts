import { img } from '@/assets/images';
import { tryTransform2dragon } from '@/utils/battle';
import { clickImage, tryClickImage, waitAndClickImage } from '@/utils/image';
import { wait } from '@/utils/wait';

export async function repeatInfinitePool(): Promise<void> {
  tryClickImage(img.teamReadyButton);
  //tryClickImage(img.startBattleButton);
  //await wait(3000);
  //tryClickImage(img.stillStartButton);
  //tryClickImage(img.closeButton);
  toastLog(`----测试一下----`);
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
