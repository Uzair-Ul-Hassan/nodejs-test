import { db } from "../lib/db.js";

// Get all vendor users
const getVendorUsers = async (req, res, next) => {
  try {
    const { prId, custOrgId } = req.query;

    if (!prId || !custOrgId) {
      return res.status(400).json({
        status: "error",
        message: "prId and custOrgId are required",
      });
    }

    const [vendorUsers] = await db.query(
      "SELECT UserName, Name from VendorUsers WHERE VendorOrganizationId in (SELECT DISTINCT suppliers FROM PrLineItems WHERE purchaseRequestId = ? AND custOrgId = ?) AND Role = ?",
      [prId, custOrgId, "Admin"]
    );

    res.status(200).json({
      status: "success",
      results: vendorUsers.length,
      data: {
        vendorUsers,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

export default { getVendorUsers };
