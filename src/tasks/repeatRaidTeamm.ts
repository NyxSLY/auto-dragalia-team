import { img } from '@/assets/images';
import { tryTransform2dragon } from '@/utils/battle';
import { clickImage, tryClickImage, waitAndClickImage } from '@/utils/image';
import { tryToBeCaptain } from '@/utils/wait';

export async function repeatRaidTeamm(): Promise<void> {
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
  const pos: Point = clickImage(img.continueButtonBlue);
  await waitAndClickImage(img.nextBattleBlue, { timeout: 5e3 });
}
