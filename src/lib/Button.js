const Button = ({children}) => {
    return (<button
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      padding: "32px",
      
      position: "static",
      width: "386px",
      height: "113px",
      left: "325px",
      top: "332px",
                  
      background: "linear-gradient(207.82deg, #23CF7C -1.96%, #2200F2 92.15%)",
      mixBlendMode: "normal",
      border: "5px solid #FFFFFF",
      boxShadow: "0px 0px 20px #053CFF",
      flex: "none",
      order: 2,
      flexGrow: 0,
    }}
  >
    {children}
  </button>);
}

export default Button;