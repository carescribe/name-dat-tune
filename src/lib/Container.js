const Container = ({children}) => {
    return (
        <div style={
            {
              backgroundColor: "#FF00C7BF",
              opacity: 0.9,
              paddingTop: 80,
              paddingRight: 64,
              paddingBottom: 80,
              paddingLeft: 64,
              display: "flex",
              flexDirection: "column",
              gap: 60,
              alignItems: "center",
              maxWidth: "80%",
            }
          }>        
          {children}
        </div>
    );
}

export default Container;