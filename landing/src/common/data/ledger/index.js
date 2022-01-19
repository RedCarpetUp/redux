export const eventData = {
  data: [
    {
      id: 1,
      code: `create_ledger_entry_from_str(
  session,
  event_id=472,
  debit_book_str="15643/lender/pool_balance/a",
  credit_book_str="26346/loan/lender_payable/l", 
  amount=100000, 
)`,
      mainHeading: "Event - Lender Disbursed Funds - #472",
      heading1: "Nodal Account",
      heading2: "Liability Account",
      subHeading1: "15643/lender/pool_balance/a",
      subHeading2: "26346/loan/lender_payable/l",
      price: "₹100,000",
      price1: "+₹1,00,000",
      price2: "=₹1,00,000",
      price3: "+₹1,00,000",
      price4: "=₹1,00,000",
    },
    {
      id: 2,
      code: `create_ledger_entry_from_str( 
  session,
  event_id=543,
  debit_book_str="26346/loan/card_balance/a",
  credit_book_str="15643/lender/pool_balance/a",
  amount=10000,
)`,
      mainHeading: "Event - Disburse Card - #543",
      heading1: "Prepaid Card",
      heading2: "Nodal Account",
      subHeading1: "26346/card/card_balance/a",
      subHeading2: "15643/lender/pool_balance/a",
      price: "₹10,000",
      price1: "+₹10,000",
      price2: "=₹10,000",
      price3: "₹10,000",
      price4: "=₹90,000",
    },
    {
      id: 3,
      code: `create_ledger_entry_from_str(
  session,
  event_id=547,
  debit_book_str="56345/bill/unbilled/a",
  credit_book_str="26346/loan/card_balance/a",
  amount=100,
)`,
      mainHeading: "Event - Card Transaction - #547",
      heading1: "User’s Loan",
      heading2: "Prepaid Card",
      subHeading1: "56345/bill/unbilled/a",
      subHeading2: "26346/card/card_balance/a",
      price: "₹100",
      price1: "+₹100",
      price2: "=₹100",
      price3: "-₹100",
      price4: "=₹9,900",
    },
  ],
};

export const billGenerationData = {
  mainHeading: "Event - Accrue Interest - #547",
  price: "₹100",
  data: [
    {
      id: 1,
      heading1: "User's loan (Principal)",
      heading2: "User's loan (Unbilled)",
      subHeading1: "56345/bill/principal_receivable/a",
      subHeading2: "56345/bill/unbilled/a",
      price1: "+₹100",
      price2: "=₹100",
      price3: "-₹100",
      price4: "=₹0",
    },
    {
      id: 2,
      heading1: "User's loan (Min amount)",
      heading2: "User's loan (Min amount)",
      subHeading1: "56345/bill/min/a",
      subHeading2: "56345/bill/min/l",
      price1: "+₹11.33",
      price2: "=₹11.33",
      price3: "+₹11.33",
      price4: "=₹11.33",
    },
    {
      id: 3,
      heading1: "User's loan (Closing amount)",
      heading2: "User's loan (Closing amount)",
      subHeading1: "56345/bill/max/a",
      subHeading2: "56345/bill/max/l",
      price1: "+₹100",
      price2: "=₹100",
      price3: "+₹100",
      price4: "=₹100",
    },
  ],
  codeData: [
    {
      id: 1,
      code: `create_ledger_entry_from_str(
        session,
        event_id=547,
        debit_book_str="56345/bill/principal_receivable/a",
        credit_book_str="56345/bill/unbilled/a",
        amount=100,
      )`,
    },
    {
      id: 2,
      code: `create_ledger_entry_from_str(
      session=session,
      event_id=547,
      debit_book_str="56345/bill/min/a",
      credit_book_str="56345/bill/min/l",
      amount=11.33,
      )`,
    },
    {
      id: 3,
      code: `create_ledger_entry_from_str(
        session,
        event_id=547,
        debit_book_str="56345/bill/max/a",
        credit_book_str="56345/bill/max/l",
        amount=amount,
      )`,
    }
  ],
};

export const accrueInterestData = {
  mainHeading: "Event - Accrue Interest - #547",
  price: "₹100",
  data: [
    {
      id: 1,
      heading1: "User's loan (Interest)",
      heading2: "Interest Accrued",
      subHeading1: "56345/bill/interest_receivable/a",
      subHeading2: "56345/bill/interest_accrued/r",
      price1: "+₹3",
      price2: "=₹3",
      price3: "+₹3",
      price4: "=₹3",
    },
    {
      id: 2,
      heading1: "User's loan (Closing amount)",
      heading2: "User's loan (Closing amount)",
      subHeading1: "56345/bill/max/a",
      subHeading2: "56345/bill/max/l",
      price1: "+₹3",
      price2: "=₹103",
      price3: "+₹3",
      price4: "=₹103",
    },
  ],
  codeData: [
    {
      id: 1,
      code: `create_ledger_entry_from_str(
  session,
  event_id=587,
  debit_book_str="56345/bill/interest_receivable/a",
  credit_book_str="56345/bill/interest_accrued/r",
  amount=3,
)`,
    },
    {
      id: 2,
      code: `create_ledger_entry_from_str(
  session=session,
  event_id=547,
  debit_book_str="56345/bill/max/a",
  credit_book_str="56345/bill/max/l",
  amount=3,
)`,
    },
  ],
};
