import { Injectable } from '@angular/core';
import { consumerBeforeComputation } from '@angular/core/primitives/signals';

@Injectable({
  providedIn: 'root'
})
export class BossDialogueService {
  coward1: Array<string>;
  coward2: Array<string>;
  cowardEnd: Array<string>;
  fun1: Array<string>;
  fun2: Array<string>;
  fun3: Array<string>;
  fun4: Array<string>;
  funQueenDeath: Array<string>;
  banter1: Array<string>;
  banter2: Array<string>;
  banter3: Array<string>;
  banter4: Array<string>;
  banter5: Array<string>;
  banter6: Array<string>;
  banterEnd: Array<string>;


  constructor() {
    this.coward1 = [
      '"Are you too cowardly to fight?"'
    ];

    this.coward2 = [
      '"Attack me, you useless worm!"'
    ];

    this.cowardEnd = [
      '"I\'ve had enough of you, dissapear!"',
      'Annoyed by your lack of fighting, the Queen slashes your head clean off',
      'You have been slain by the Queen...',
    ]

    this.fun1 = [
      'The Queen smiles, baring her sharp teeth, "Are you trying to make this fight last?"'
    ]

    this.fun2 = [
      'The Queen laughs, "You are enjoying this as much as I am...',
      'Her hand glows, her wounds close. /n "Let us make this moment last',
    ]

    this.fun3 = [
      'The Queen does a gleeful dance before slashing at you',
      '"How fun," she says, "I hope this moment never ends"'
    ]

    this.fun4 = [
      'She smacks her lips,',
      '"I like you, human soldier. Too bad this must end soon...'
    ]

    this.funQueenDeath = [
      'The Queen falls at last, not without smiling',
      '"What a great time I had..." she sigh, "How I wish I could stay forever, scratching and biting at you..."',
      'Her body starts to fade away, pulled back to the darkness she comes from...',
      'She looks at you one last time, /n "Alas, I hope you will come find me into the Hells..."',
      '"Else, find it in you to summon me once more... Then we shall dance even more beautifully than we have today..."',
      '"See you soon, my dear..."',
      'The Queen is no more.',
      'You sheathe your blade.',
      'Before you remains nothing but blue skies, and happy, safe, people.',
      'You already yearn for your next adventure...',
      'Somewhere, anywhere in this now peaceful world, the gates to hell call for you.',
    ]

    this.banter1 = [
      '"You are not just strong, but also quite entertaining" the Queen smiles'
    ]

    this.banter2 = [
      'You could swear you could have seen the Queen\'s cheeks bloom cherry pink',
      '"Watch your words, human" she warns with a smile, "lest you entice me to capture you as mine...'
    ]

    this.banter3 = [
      'The queen laughs at your joke. For a second you could have forgotten she was a demon, and not any beautiful maiden',
      'Well, any maiden that could be three stories tall, and covered in scales and spikes...'
    ]

    this.banter4 = [
      'It is obvious to you that the Queen\'s sword is barely swinging anymore.',
      'She scratches at you still, but her will to kill you is well gone.',
      '"Tell me another one of your witty quips," she demands firmly, "Entertain me."'
    ]

    this.banter5 = [
      '"Were we really ever meant to be enemies..." the Queen ponders, "I could mistake you as my soulmate"',
      '"Tell me, dear, do you believe in soulmates?',
      'She doesn\'t wait for your answer though, only throws a spell towards you. Just as you hoped she would',
    ]

    this.banter6 = [
      'The Queen\'s brows furrow, but her smile grows.',
      '"Be careful, human. This is your last chance to cease your flirtations. Keep at it, and I shall make you mine forever."'
    ]

    this.banterEnd = [
      '"Enough, now" the Queen frowns.',
      'She waves her hands, the flames in the castle halt their dance, frozen in time.',
      'The Queen lands her feet to the ground, and makes towards you.',
      '"I know you noticed it already" she says, gaze planted in yours "I would loathe to slay you. To the point I can barely fight anymore."',
      '"And given how little you have been hitting me anymore, I believe I can say you feel the same."',
      'She stops right before you, blade lowered.',
      '"But either of us has to die, isn\'t it the way these things work?"',
      'You lose her to her thoughts, briefly. She browses the knowledge she ammassed in her immortality.',
      '"Such a brave fighter you are..." she murmurs, "you would not ever shake, no matter the monsters that surround you..."',
      '"Even if you did shake... In the realm of monsters, none stands above me."',
      "If ever a demon was to cause you grief, I'd make them miss the hell we came from.",
      '"And if ever one was to disrespect my throne, your blade would bring back order to the court of Evil"',
      'She looks at you, more certain than ever.',
      '"My dear human, please tell me..."',
      '"Would you follow me into Darkness?"',
      '"Would you become my Knight? My hand, my shadow, my blade?"',
      'She holds her sword out, for you to take as yours.',
      'The handle flickers with demonic magics, but you are not afraid.',
      '"I would let you roam Hell and Earth both," she speaks to the doubts remaining in your heart,',
      '"I\'d let you roam the lands, bring back stories of your destruction to me."',
      '"As long as you always swear to come back to me, as long as you remain mine."',
      '"Follow me, my Equal, my Love. Take my hand, take my sword."',
      '"Or refuse me, and kill me at once."',
      'You do not hesitate.'
    ]
  }
}
