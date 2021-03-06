/* eslint-disable max-len */

import React from 'react'

const Glyphs = {
  edit: (
    <svg enableBackground="new 0 0 32 32" height="32px" id="svg2" version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve">
      <g id="background">
        <rect fill="none" height="32" width="32" />
      </g>
      <g id="edit">
        <polygon points="10,28 4,28 4,22  " />
        <rect height="8.485" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 41.6274 8.7574)" width="28.284" x="4.858" y="8.757" />
        <polygon points="4,32 4,30 26,30 26,32 4,32  " />
      </g>
    </svg>
  ),

  add: (
    <svg enableBackground="new 0 0 24 24" height="24px" id="Layer_1" version="1.1" viewBox="0 0 24 24" width="24px" xmlSpace="preserve">
      <path clipRule="evenodd" d="M22.5,14H14v8.5c0,0.276-0.224,0.5-0.5,0.5h-4C9.224,23,9,22.776,9,22.5V14H0.5  C0.224,14,0,13.776,0,13.5v-4C0,9.224,0.224,9,0.5,9H9V0.5C9,0.224,9.224,0,9.5,0h4C13.776,0,14,0.224,14,0.5V9h8.5  C22.776,9,23,9.224,23,9.5v4C23,13.776,22.776,14,22.5,14z" fillRule="evenodd" />
    </svg>
  ),

  remove: (
    <svg enableBackground="new 0 0 14 18" height="14" id="Layer_1" version="1.1" viewBox="0 0 14 18" width="18" xmlSpace="preserve">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <rect x="4" fill="currentColor" y="0" width="7" height="2" />
        <polygon fill="currentColor" points="0 3 0 5 2 5 2 8 13 8 13 5 15 5 15 3" />
        <rect fill="currentColor" x="2" y="8" width="2" height="8" />
        <rect fill="currentColor" x="5" y="8" width="1" height="8" />
        <rect fill="currentColor" x="7" y="8" width="1" height="8" />
        <rect fill="currentColor" x="9" y="8" width="1" height="8" />
        <rect fill="currentColor" x="11" y="8" width="2" height="8" />
        <rect fill="currentColor" x="2" y="16" width="11" height="2" />
      </g>
    </svg>
  ),

  search: (
    <svg height="16px" version="1.1" viewBox="0 0 16 16" width="16px">
      <path d="M15.7,14.3l-3.105-3.105C13.473,10.024,14,8.576,14,7c0-3.866-3.134-7-7-7S0,3.134,0,7s3.134,7,7,7  c1.576,0,3.024-0.527,4.194-1.405L14.3,15.7c0.184,0.184,0.38,0.3,0.7,0.3c0.553,0,1-0.447,1-1C16,14.781,15.946,14.546,15.7,14.3z   M2,7c0-2.762,2.238-5,5-5s5,2.238,5,5s-2.238,5-5,5S2,9.762,2,7z" />
    </svg>
  ),

  like: (
    <svg enableBackground="new 0 0 24 24" height="24px" id="Layer_1" version="1.1" viewBox="0 0 24 24" width="24px" xmlSpace="preserve">
      <g>
        <path d="M19.862,21.484h-9.229c-0.833,0-2.52-1.094-2.52-1.988v-8.146c0-0.182,0.098-0.35,0.256-0.438   c1.841-1.028,2.772-2.854,3.744-5.657V2.569c0-0.091,0.024-0.18,0.071-0.258c0.304-0.506,0.83-0.796,1.443-0.796   c0.789,0,1.619,0.477,2.221,1.271c0.607,0.805,1.473,2.582,0.758,5.696h4.213c0.938,0,3.065,0.966,3.065,2.554   c0,0.523-0.062,1.321-0.395,1.788c0.262,0.733,0.312,1.922-0.493,2.76c0.066,1.412-0.289,2.438-1.038,3   c-0.013,0.746-0.356,1.658-0.874,2.252C20.719,21.26,20.295,21.484,19.862,21.484z M9.115,11.634v7.86   c0.082,0.268,1.096,0.988,1.52,0.988h9.228c0.132,0,0.305-0.113,0.475-0.308c0.404-0.465,0.688-1.284,0.618-1.791   c-0.029-0.207,0.073-0.407,0.258-0.51c0.812-0.438,0.834-1.729,0.777-2.461c-0.015-0.16,0.054-0.317,0.178-0.424   c0.726-0.604,0.502-1.712,0.294-2.029c-0.089-0.137-0.105-0.31-0.046-0.459c0.062-0.15,0.19-0.265,0.351-0.301   c-0.021-0.027,0.123-0.435,0.123-1.168c0-0.813-1.486-1.554-2.064-1.554h-4.858c-0.157,0-0.304-0.072-0.397-0.197   s-0.125-0.287-0.082-0.438c0.64-2.263,0.481-4.251-0.43-5.458c-0.486-0.646-1.056-0.874-1.424-0.874   c-0.219,0-0.392,0.071-0.516,0.213v2.607c0,0.058-0.01,0.109-0.027,0.163C12.096,8.376,11.073,10.421,9.115,11.634z" /><path d="M7.361,22.484H1.869c-0.967,0-1.754-0.787-1.754-1.754V10.236c0-0.967,0.787-1.753,1.754-1.753h5.492   c0.967,0,1.754,0.786,1.754,1.753V20.73C9.115,21.697,8.328,22.484,7.361,22.484z M1.869,9.483c-0.416,0-0.754,0.338-0.754,0.753   V20.73c0,0.416,0.338,0.754,0.754,0.754h5.492c0.416,0,0.754-0.338,0.754-0.754V10.236c0-0.415-0.338-0.753-0.754-0.753H1.869z" />
      </g>
    </svg>
  ),

  unlike: (
    <svg enableBackground="new 0 0 24 24" height="24px" id="Layer_1" version="1.1" viewBox="0 0 24 24" width="24px" xmlSpace="preserve">
      <g>
        <path d="M13.71,22.355L13.71,22.355c-0.651,0-1.207-0.306-1.525-0.834c-0.046-0.078-0.07-0.168-0.07-0.258v-2.688   c-0.973-2.802-1.903-4.627-3.744-5.656c-0.158-0.09-0.256-0.258-0.256-0.438V4.335c0-0.979,1.769-1.69,2.52-1.69h9.228   c0.453,0,0.896,0.231,1.279,0.672c0.498,0.571,0.813,1.394,0.822,2.101C22.714,5.969,23.064,6.934,23,8.291   c0.783,0.822,0.764,2.039,0.491,2.8c0.335,0.479,0.396,1.313,0.396,1.854c0,1.562-2.15,2.699-3.064,2.699h-4.215   c0.694,3.027-0.117,4.722-0.692,5.48C15.329,21.895,14.506,22.355,13.71,22.355z M13.113,21.105c0.174,0.203,0.414,0.25,0.597,0.25   l0,0c0.483,0,1.011-0.313,1.405-0.834c0.502-0.664,1.218-2.229,0.365-5.242c-0.043-0.148-0.013-0.313,0.082-0.438   c0.096-0.125,0.242-0.196,0.398-0.196h4.857c0.548,0,2.065-0.847,2.065-1.701c0-0.72-0.132-1.146-0.207-1.269   c-0.12-0.053-0.217-0.148-0.267-0.272c-0.063-0.149-0.043-0.322,0.046-0.459c0.229-0.354,0.408-1.479-0.294-2.065   c-0.125-0.104-0.191-0.263-0.178-0.425c0.097-1.232-0.157-1.998-0.777-2.332c-0.184-0.1-0.287-0.302-0.258-0.509   c0.064-0.479-0.184-1.198-0.567-1.639c-0.183-0.209-0.374-0.329-0.524-0.329H10.63c-0.478,0-1.423,0.49-1.525,0.738l0.006,7.813   c1.958,1.212,2.98,3.261,3.973,6.136c0.021,0.053,0.026,0.105,0.026,0.162v2.609h0.002v0.002H13.113z" /><path d="M7.359,15.645H1.867c-0.967,0-1.754-0.787-1.754-1.754V3.397c0-0.967,0.787-1.753,1.754-1.753h5.492   c0.967,0,1.754,0.786,1.754,1.753v10.493C9.113,14.857,8.326,15.645,7.359,15.645z M1.867,2.645c-0.416,0-0.754,0.338-0.754,0.753   v10.493c0,0.416,0.338,0.754,0.754,0.754h5.492c0.416,0,0.754-0.338,0.754-0.754V3.397c0-0.415-0.338-0.753-0.754-0.753H1.867z" />
      </g>
    </svg>
  ),

  arrow: (
    <svg id="Layer_1" version="1.1" viewBox="0 0 64 64" xmlSpace="preserve">
      <g id="Icon-Chevron-Left" transform="translate(237.000000, 335.000000)" fill="none" fillRule="evenodd">
        <polyline fill="currentColor" id="Fill-35" points="-218.7,-308.6 -216.7,-310.6 -205,-298.8 -193.3,-310.6 -191.3,-308.6 -205,-294.9      -218.7,-308.6    " />
      </g>
    </svg>
  ),

  view: (
    <svg enableBackground="new 0 0 32 32" height="32px" id="svg2" version="1.1" viewBox="0 0 32 32" width="32px">
      <g id="background">
        <rect fill="none" height="32" width="32" />
      </g>
      <g id="view">
        <circle cx="16" cy="16" r="6" />
        <path d="M16,6C6,6,0,15.938,0,15.938S6,26,16,26s16-10,16-10S26,6,16,6z M16,24c-8.75,0-13.5-8-13.5-8S7.25,8,16,8s13.5,8,13.5,8   S24.75,24,16,24z" />
      </g>
    </svg>
  ),
}

export default Glyphs
