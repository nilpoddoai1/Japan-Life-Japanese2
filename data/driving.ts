export const drivingInfo = {
  sections: [
    {
      title: 'Road Signs',
      description: 'Recognize the most important road signs used in Japan for safe driving and test preparation.',
      items: [
        { label: 'Stop sign', detail: '一時停止 (ichiji teishi) means stop completely before proceeding.' },
        { label: 'No parking', detail: '駐車禁止 (chuusha kinshi) means parking is not allowed.' },
        { label: 'Speed limit', detail: '速度制限 shows maximum allowed speed in kilometers per hour.' }
      ]
    },
    {
      title: 'Important Vocabulary',
      description: 'Common driving terms you will see during practice and on written exams.',
      items: [
        { label: 'Traffic light', detail: '信号 (shingou)' },
        { label: 'Intersection', detail: '交差点 (kousaten)' },
        { label: 'Priority road', detail: '優先道路 (yuusen douro)' }
      ]
    },
    {
      title: 'Practical Test Tips',
      description: 'Advice for the practical driving test and how to stay calm during the exam.',
      items: [
        { label: 'Stay alert', detail: 'Check mirrors frequently and follow examiner instructions clearly.' },
        { label: 'Signal early', detail: 'Use turn signals before lane changes and turning.' },
        { label: 'Smooth control', detail: 'Keep acceleration and braking gentle and steady.' }
      ]
    },
    {
      title: 'Written Test Tips',
      description: 'Prepare for the theory exam with clear strategies and focus areas.',
      items: [
        { label: 'Read questions carefully', detail: 'Pay attention to wording and safety-related instructions.' },
        { label: 'Practice road signs', detail: 'Memorize common symbols and their meanings before the test.' },
        { label: 'Time management', detail: 'Answer easier questions first and review before submitting.' }
      ]
    }
  ],
  roadSigns: [
    { title: 'Stop', value: '一時停止', description: 'Come to a full stop at the line and check both ways.' },
    { title: 'Yield', value: '徐行', description: 'Slow down and give way as instructed by the sign.' },
    { title: 'No U-turn', value: '転回禁止', description: 'Do not turn your vehicle around at this location.' },
    { title: 'Pedestrian crossing', value: '横断歩道', description: 'Watch for pedestrians and stop if needed.' }
  ]
}
