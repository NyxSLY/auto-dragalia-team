import { img } from '@/assets/images';
import { clickImage, tryClickImage, waitAndClickImage } from '@/utils/image';

export async function wait(delay: number): Promise<void> {
  if (delay <= 0) {
    return;
  }

  return new Promise((resolve: () => void): void => {
    setTimeout(resolve, delay);
  });
}

export async function tryToBeCaptain(): Promise<void> {
  try {
    await captainReady();
  } catch {
    tryClickImage(img.teamReadyButton);
  }
}

async function captainReady(): Promise<void> {
  const pos: Point = clickImage(img.startBattleButton);
  await wait(2000);
  tryClickImage(img.cancelButton);
  tryClickImage(img.stillStartButtonRed); // 这里是红色按钮
  tryClickImage(img.closeButton);
  tryClickImage(img.cancelButton);
}
