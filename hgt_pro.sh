#!/data/data/com.termux/files/usr/bin/bash

# --- COLORS FOR PROFESSIONAL LOOK ---
G='\e[1;32m' # Green
B='\e[1;34m' # Blue
Y='\e[1;33m' # Yellow
R='\e[1;31m' # Red
W='\e[0m'    # White

# --- REVENUE ENGINE ---
show_ad() {
    echo -e "${R}[!] LOADING HGT INTERSTITIAL AD...${W}"
    termux-open-url "https://hgt-global-server.onrender.com/chat" # Triggers the Ad Path
    sleep 2
}

while true; do
    clear
    echo -e "${G}======================================${W}"
    echo -e "    ${G}HGT GLOBAL TECH - FINANCE PRO${W}    "
    echo -e "${G}======================================${W}"
    
    # --- LIVE HIGH RATES SECTION (BANNER REPLACEMENT) ---
    echo -e "${B}[ LIVE HIGH RATES ]${W}"
    # Fetching live BTC High Rate from Binance
    BTC_HIGH=$(curl -s "https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT" | jq -r '.highPrice')
    USD_NGN="1,555.00" # Current Market High
    
    echo -e "💵 USD/NGN High: ${Y}₦$USD_NGN${W}"
    echo -e "₿ BTC/USD High: ${Y}\$$BTC_HIGH${W}"
    echo -e "${G}--------------------------------------${W}"
    
    # --- BOTTOM MENU ---
    echo -e "1. ${B}LIVE TRENDS${W} (Refresh)"
    echo -e "2. ${B}CONVERT MONEY${W} (Input Naira)"
    echo -e "3. ${R}EXIT${W}"
    echo -e "${G}--------------------------------------${W}"
    read -p "Select Menu: " menu

    if [ "$menu" == "1" ]; then
        show_ad # Trigger Interstitial on menu click
        continue

    elif [ "$menu" == "2" ]; then
        show_ad # Trigger Interstitial before calculation
        echo -e "\n${Y}[ HGT CONVERTER ]${W}"
        read -p "Enter Amount in Naira: " naira
        rate=1555
        # Calculation logic
        ans=$(echo "scale=2; $naira / $rate" | bc)
        echo -e "${G}>>> TOTAL: \$$ans USD${W}"
        read -p "Press Enter to return to Menu..."
        
    elif [ "$menu" == "3" ]; then
        break
    fi
done
