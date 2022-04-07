const Container = ({children}) => {
    return (
        <div style={
            {
              width: "80%",
              maxWidth: "1036",
              backgroundColor: "#FF00C7BF",
              opacity: 0.9,
              paddingTop: 80,
              paddingRight: 64,
              paddingBottom: 80,
              paddingLeft: 64,
              display: "flex",
              flexDirection: "column",
              gap: 60,
              alignItems: "center"
            }
          }>        
          {children}
        </div>
    );
}

export default Container;