module.exports = {
  title: 'PowerAPI',
  description: 'PowerAPI documentation.',
  themeConfig: {
    nav: [
      { text: 'Github', link: 'https://github.com/powerapi-ng/powerapi' },
    ],
    sidebar: [
     {
       title: 'PowerAPI',
       collapsable: false,
       children: [
         '/powerapi/powerapi_howitworks',
       ]
     },
     {
       title: 'Sensor',
       collapsable: false,
       children: [
         '/sensor/hwpc',
       ]
     },
     {
       title: 'Formula',
       collapsable: false,
       children: [
         '/formula/rapl',
       ]
     },
     {
       title: 'Howto',
       collapsable: false,
       children: [
         '/howto/measure_socket'
       ]
     },
    ]
  }
}
