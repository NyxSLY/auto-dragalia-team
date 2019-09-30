import { img } from '@/assets/images';
import { clickImage, tryClickImage, waitAndClickImage } from '@/utils/image';

export async function repeatRaidTeamSimple(): Promise<void> {
  tryClickImage(img.teamReadyButton);
  await tryRepeatWithStaminaTeamMember();
}

async function tryRepeatWithStaminaTeamMember(): Promise<void> {
  try {
    await repeatWithStamina();
  } catch {
    tryClickImage(img.continueButtonBlue);
  }
}
async function repeatWithStamina(): Promise<void> {
  const pos: Point = clickImage(img.continueButtonBlue);
  await waitAndClickImage(img.nextBattleBlue);
}
