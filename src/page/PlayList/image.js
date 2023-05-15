const img = [
   {
       id:1, 
       image:"https://soso-test-bucket.s3.ap-northeast-2.amazonaws.com/afterLike.jpg",
       title : 'Kitsch',
       artist : 'IVE',
       url: "https://cf-media.sndcdn.com/WbrcQsIBbP2v.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vV2JyY1FzSUJiUDJ2LjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjgzMDQwNTgwfX19XX0_&Signature=ZwgtrT3do~6AkcCEUZV5xjvtGrkPJgA4DfXAO3BzHr6f0ukIzaTPM~2QanAgKmyyT9RcCe7ETP-G9NCFrDzVyVqi8DEYYVMGBVnZ1UdQZjqt2iJmCQrGQGFfOqp96ZgeE-nVys-v4vofakhQUvj8-7~KZgV-4IpHSBCSLzwjYtE7qTQlWhXmYt5argOcdpjLyZAAAB8UklXX8XlAz9qOvHEDsfg~eUUJxNcg4OTau4dQqqn46sfe8CA21EsHy8MoT6f-DfZ4cuEEuZxK-CDeksrXq4FJU~GINnyjbktLwRykbrIpX-47CiIWAXGa9lmfw2EuhvwaLQ4rC88pSMVtyg__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ"
    },
    {
       id:2,
       image:"images/setmefree.jpg",
       title: 'SET ME FREE',
       artist: 'TWICE',
       url: "https://cf-media.sndcdn.com/eqAoUA1ijXu7.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vZXFBb1VBMWlqWHU3LjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjgzMDQwMzA5fX19XX0_&Signature=D3qO-PacOyJCfygDuQAFrgST48vmLBQy9M4R2MEFTsUTRpIOYcpMDTRtlXQzmXDRoOYBnzowjnUUUrQ4xhGD9wwfa4Y-9nCNijEFU91z1Fwg9nopzELkGZRPkF~6Tqr5yCbSuIgPpB0cLz8TnOk4AuSW4qEfi3SIbJ8nd8OMg0xMEp2eRlpRc-droCYV~rdEuaHIdUGSQGgzsKv9Fgfal7Cu-mD00Njyj-f04GOlKmGxnZ2E78a9kRBxNTfEzXmcQDliNdSUcX7SDwghaCzbr6mKhbHTp5SDJU-0lGYgk~C5bMAc7fqztOsaYzyEzXPXIXNBzdUKDZTo6E4uIJALOw__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ"
    },
    {
     id : 3,
     image : 'images/iam.jpg',
     title : 'I AM',
     artist : 'IVE',
     url: "https://cf-media.sndcdn.com/PxWhz6AbJp2P.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vUHhXaHo2QWJKcDJQLjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjgzMDA3ODUyfX19XX0_&Signature=BV6VR~TtExIZcJVKLiHFkaQVvyX60R~Kf2U44mRttak7ymK78fDL-dzY4knQAYbtJlzrUinfdQaf3~csG-UE~X7GrHfY3Y8WsmxMhzJNE02Ui5DgKnHV7qDZfhhaiX-tl~qxJ0QwePbH~nJrli0FJZV2C8SlMIeCKt3D3SdeeIs9dJbGE6Nu7pxA7W48eqMcxz6gEwkj~lLJLWl7DlUx4TJ~pzhrGDKyR9jqmIdGS1oWCuUEJbjtfO8tkpeYNakdC0fFGLNZC9h93BwcPtOHDHFFnRTW3633F-I~IoUXLaTNtpPVO~XH2usBFwEM3BXBhr1ZvzZIHkh5zkSw8H0hVA__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ"
   },
   {
     id : 4,
     image : 'images/antifragile.jpg',
     title : "ANTIFRAGILE",
     artist : 'LE SSERAFIM',
     url: "https://cf-media.sndcdn.com/eqAoUA1ijXu7.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vZXFBb1VBMWlqWHU3LjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjgzMDQwMzA5fX19XX0_&Signature=D3qO-PacOyJCfygDuQAFrgST48vmLBQy9M4R2MEFTsUTRpIOYcpMDTRtlXQzmXDRoOYBnzowjnUUUrQ4xhGD9wwfa4Y-9nCNijEFU91z1Fwg9nopzELkGZRPkF~6Tqr5yCbSuIgPpB0cLz8TnOk4AuSW4qEfi3SIbJ8nd8OMg0xMEp2eRlpRc-droCYV~rdEuaHIdUGSQGgzsKv9Fgfal7Cu-mD00Njyj-f04GOlKmGxnZ2E78a9kRBxNTfEzXmcQDliNdSUcX7SDwghaCzbr6mKhbHTp5SDJU-0lGYgk~C5bMAc7fqztOsaYzyEzXPXIXNBzdUKDZTo6E4uIJALOw__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ"
  },
  {
     id : 5,
     image : 'images/antifragile.jpg',
     title : "ANTIFRAGILE",
     artist : 'LE SSERAFIM',
     url: "https://soso-test-bucket.s3.ap-northeast-2.amazonaws.com/cupid.mp3"
  }
]
export default img;